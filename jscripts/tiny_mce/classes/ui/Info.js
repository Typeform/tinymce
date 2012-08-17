/**
 * 
 * Info.js
 *
 * Based on Button.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

(function(tinymce) {
	var DOM = tinymce.DOM;

	/**
	 * This class is used to create a UI button. A button is basically a link
	 * that is styled to look like a button or icon.
	 *
	 * @class tinymce.ui.Info
	 * @extends tinymce.ui.Control
	 */
	tinymce.create('tinymce.ui.Info:tinymce.ui.Control', {
		/**
		 * Constructs a new info control instance.
		 *
		 * @constructor
		 * @method Info
		 * @param {String} id Control id for the button.
		 * @param {Object} s Optional name/value settings object.
		 * @param {Editor} ed Optional the editor instance this button is for.
		 */
		Info : function(id, s, ed) {
			this.parent(id, s, ed);
			this.classPrefix = 'mceInfo';
		},

		/**
		 * Renders the button as a HTML string. This method is much faster than using the DOM and when
		 * creating a whole toolbar with buttons it does make a lot of difference.
		 *
		 * @method renderHTML
		 * @return {String} HTML for control element.
		 */
		renderHTML : function() {
			var cp = this.classPrefix, s = this.settings, h, l;

			l = DOM.encode(s.label || '');
			h = '<span role="info" id="' + this.id + '" class="' + cp + ' ' + cp + 'Enabled ' + s['class'] + (l ? ' ' + cp + 'Labeled' : '') +'" onmousedown="return false;" onclick="return false;" aria-labelledby="' + this.id + '_voice" title="' + DOM.encode(s.title) + '">';
			h += s.content;
			h += '</span>';
			return h;
		},

		/**
		 * Updates the content with the provided data
		 *
		 */
		update : function( data ) {
			
			var el = this.getElement();

			for (var i in data) {

				// replace content of element with class 'i' with data[i]
				DOM.setHTML( DOM.select('.'+i, el)[0], data[i]);
			}
		},

		getElement : function() {
			return DOM.get(this.id);
		},

		/**
		 * Post render handler. This function will be called after the UI has been
		 * rendered so that events can be added.
		 *
		 * @method postRender
		 */
		postRender : function() {
		}
	});
})(tinymce);
