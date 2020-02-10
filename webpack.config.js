const path                    = require('path')
const _                       = require("lodash")
const morgan                  = require("morgan")
const webpack                 = require("webpack")
const BundleAnalyzerPlugin    = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin    = require('mini-css-extract-plugin')
const HtmlWebpackPlugin       = require('html-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin            = require("terser-webpack-plugin")
require("./src/server/config").init()

const BUILD_DIR               = path.resolve(__dirname, 'dist/')
const APP_DIR                 = path.resolve(__dirname, 'src/client')


//This is an example of a single entry script build for a react/single-page app. Hence "main"
//For a multi-page site build, you'll want to create entries for each page script instead.
const buildConfig = (options = {}) => {
  let {name, mode} = options
  let devMode = mode !== "production"
  let optimization = {}
  if (!devMode)
    optimization = {
      minimize: !devMode
      ,minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})]
    }

  let styleLoader = "style-loader"
  if (!devMode)
    styleLoader = {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: devMode
        ,sourceMap: true
        ,publicPath: (resourcePath, context) => {
          // publicPath is the relative path of the resource to the context
          // e.g. for ./css/admin/main.css the publicPath will be ../../
          // while for ./css/main.css the publicPath will be ../
          return path.relative(path.dirname(resourcePath), context) + '/'
        },
      },
    }

  var config = {
    entry: {}
    ,optimization
    ,output: {
      path: BUILD_DIR,
      filename: "index.bundle.js" //this [name] is the entry name. i.e. 'main'
    }
    ,mode: process.env.NODE_ENV
    ,plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/
      })
      ,new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css",
      })
      ,new HtmlWebpackPlugin({
        hash: true,
        base: "/",
        template: './src/client/index.html',
        filename: `${name}.html`,
        inject: false
      })
      //TODO: Enable this to checkout your production build disk size
      ,new BundleAnalyzerPlugin({
        analyzerMode: "static"
        ,openAnalyzer: true
      })
    ]
    ,module: {
      rules: [
        {
          test: /\.js$/, //files to apply this loader
          exclude: /node_modules/, //excludes global modules
          use: {
            loader: 'babel-loader', //webpack loader to setup babel
            options: {
              babelrc: true //disables .babelrc config; using this one only
            }
          }
        },
        {
          test: /\.scss$/,
          use: [
            styleLoader
            ,{
              loader: 'css-loader',
              options: {
                sourceMap: true,
              }
            }
            ,{
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            }
          ]
        }
      ]
    }
    ,devServer: {
      contentBase: './dist'
      ,hot: true
      ,port: 3000
      ,host: "0.0.0.0"
      ,historyApiFallback: true
      ,stats: {
        all: false,
        errors: true,
        assets: true,
        assetsSort: "!size",
        colors: true,
        performance: true
      }
      ,before: function(app) {
        app.use(morgan("dev"))
      },
    }
  }

  if (devMode)
    config.devtool = 'source-map'

  config.entry["core-js/stable", "regenerator-runtime/runtime", name] = `${path.join(APP_DIR, name)}.js`

  return config
}

//if you have multiple apps (like say: public site vs private app),
//  you can call buildConfig multiple times with different subfolders
module.exports = (env, argv) => {
  let mode = argv.mode || "development"
  return buildConfig({name: "index", mode}) //could be array
}
