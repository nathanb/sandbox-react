import {JSDOM} from 'jsdom'
import {expect} from 'chai'

global.expect = expect
global.dom = new JSDOM('<!DOCTYPE html><body></body>')
global.window = global.dom.window
global.document = global.dom.window.document
