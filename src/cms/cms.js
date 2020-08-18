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
    };
  },
  toBlock: function(obj) {
    return '`youtube: ' + obj.id + '`';
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return (
      '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>'
    );
  }
});

CMS.registerEditorComponent({
  id: 'two_column',
  label: '2 Column',
  fields: [
    {name: 'column_one', label: 'Content', widget: 'markdown'},
    {name: 'column_two', label: 'Content', widget: 'markdown'}
  ],
  pattern: `/\[column:.*?(\S)\w+.*?\]/g`,
  fromBlock: function(match) {
    return {
      column_one: match[1],
      column_two: match[2]
    };
  },
  toBlock: function(obj) {
    return (
      '[[column:' + obj.column_one + '] [column:' + obj.column_two + ']]'
    );
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return (
      '<div className="d-flex"><div>' + obj.column_one + '</div><div>' + obj.column_two + '</div></div>'
    );
  }
});

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('journal', JournalPostPreview)
CMS.registerPreviewTemplate('work', WorkPostPreview)
CMS.registerPreviewTemplate('studies', StudiesPostPreview)
CMS.registerPreviewTemplate('news', NewsPostPreview)
