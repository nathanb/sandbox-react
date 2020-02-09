function getValue(key,_default) {
  if (typeof process.env[key] === "undefined")
    return _default
  return process.env[key]
}

exports.init = function() {
  process.env.NODE_ENV     = getValue("NODE_ENV", "development")
  process.env.DEBUG_PREFIX = getValue("DEBUG_PREFIX", "fv")
  process.env.DEBUG        = getValue("DEBUG", `${process.env.DEBUG_PREFIX}:*`)

  process.env.PORT         = getValue("PORT", 3000)
  process.env.HOSTNAME     = getValue("HOSTNAME", `localhost:${process.env.PORT}`)

  //these are just experimental settings for my own use in a project I was standing up. I left them here, so you could see them.
  process.env.TITLE        = getValue("TITLE", "React Sandbox")
  process.env.DESCRIPTION  = getValue("DESCRIPTION", "This is just a demo site using react, docker, webpack, babel, etc")
}
