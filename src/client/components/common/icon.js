import React from 'react' // lazy for lazy loading modules
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import fas from '@fortawesome/fontawesome-free/js/solid'
import {library} from '@fortawesome/fontawesome-svg-core'


// NOTE: this module level: happens on first load
library.add(fas)

/*
  The purpose of this components only to centralize our icon usage and simplify global
  config for it.
*/
const Icon = (props) => {
  // So I'm totally tweaking this behavior for our usage of these icons in this app. Normally,
  // you ALWAYS have to provide the `far` prefix for regular icons because the default is
  // `fas` for solid. But we're going to tweak it; and automatically add `far` prefix.
  // Caveat: To use `fas` or other prefixes, you'll need to define it fully: i.e. `icon={['fas', 'icon-name']}`

  let icon = props.icon
  if (typeof icon === 'string') {
    icon = ['fas', props.icon]
  }
  // props includes icon, but the subsequent icon overrides it.
  return <FontAwesomeIcon {...props} icon={icon}/>
}

export default Icon
