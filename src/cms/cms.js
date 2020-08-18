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
    console.log('youtube: fromBlock')
    return {
      id: match[1]
    };
  },
  toBlock: function(obj) {
    console.log('youtube: toBlock')
    return '`youtube: ' + obj.id + '`';
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    console.log('youtube: toPreview')
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
  pattern: /^`columns: (\S+)`$/,
  fromBlock: function(match) {
    console.log('column: fromBlock')
    console.log('match: ' + match)

    const pat = /(\[(?:\[??[^\[]*?\]))/g
    const columns = match.toString().search(pat) : null

    return {
      column_one: columns ? columns[1] : '',
      column_two: columns ? columns[2] : ''
    };
  },
  toBlock: function(obj) {
    console.log('column: toBlock')
    return (
      '`columns: [[' + obj.column_one + '][' + obj.column_two + ']]`'
    );
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    console.log('column: toPreview')
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
