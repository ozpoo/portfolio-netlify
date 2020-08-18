import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import JournalPostPreview from './preview-templates/JournalPostPreview'
import WorkPostPreview from './preview-templates/WorkPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import StudiesPostPreview from './preview-templates/StudiesPostPreview'
import NewsPostPreview from './preview-templates/NewsPostPreview'

CMS.registerEditorComponent({
  id: 'youtube',
  label: 'Youtube',
  fields: [{name: 'id', label: 'Youtube Video ID', widget: 'string'}],
  pattern: /^`youtube: (\S+)`$/,
  fromBlock: function(match) {
    return {
      id: match[1]
    }
  },
  toBlock: function(obj) {
    console.log('youtube: toBlock')
    return '`youtube: ' + obj.id + '`'
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>'
  }
})

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('journal', JournalPostPreview)
CMS.registerPreviewTemplate('work', WorkPostPreview)
CMS.registerPreviewTemplate('studies', StudiesPostPreview)
CMS.registerPreviewTemplate('news', NewsPostPreview)
