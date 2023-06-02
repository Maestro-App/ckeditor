/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor.js";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import DocumentList from "@ckeditor/ckeditor5-list/src/documentlist.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import Mention from "@ckeditor/ckeditor5-mention/src/mention.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat.js";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  Alignment,
  Bold,
  DocumentList,
  Essentials,
  Indent,
  Italic,
  Link,
  Paragraph,
  RemoveFormat,
  Underline,
];

// Editor configuration.
Editor.defaultConfig = {
  toolbar: {
    items: [
      "bold",
      "italic",
      "underline",
      "|",
      "link",
      "|",
      "alignment",
      "|",
      "bulletedList",
      "numberedList",
      "|",
      "removeFormat",
    ],
  },
  language: "en",
};

export default Editor;
