import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import JournalPostPreview from './preview-templates/JournalPostPreview'
import WorkPostPreview from './preview-templates/WorkPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import StudiesPagePreview from './preview-templates/StudiesPagePreview'
import NewsPagePreview from './preview-templates/NewsPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('journal', JournalPostPreview)
CMS.registerPreviewTemplate('work', WorkPostPreview)
CMS.registerPreviewTemplate('studies', StudiesPostPreview)
CMS.registerPreviewTemplate('news', NewsPostPreview)
