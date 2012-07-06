/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */

(function() {

	tinymce.create('tinymce.plugins.NativeListBoxTestPlugin', {
		
		init : function(ed, url) {
			// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');
			ed.addCommand('mceExample', function() {
				ed.windowManager.open({
					file : url + '/dialog.htm',
					width : 320 + parseInt(ed.getLang('example.delta_width', 0)),
					height : 120 + parseInt(ed.getLang('example.delta_height', 0)),
					inline : 1
				}, {
					plugin_url : url, // Plugin absolute URL
					some_custom_arg : 'custom arg' // Custom argument
				});
			});

			// Register example button
			ed.addButton('example', {
				title : 'example.desc',
				cmd : 'mceExample',
				image : url + '/img/example.gif'
			});

			// Add a node change handler, selects the button in the UI when a image is selected
			ed.onNodeChange.add(function(ed, cm, n) {
				cm.setActive('example', n.nodeName == 'IMG');
			});
		},

		createControl: function(n, cm) {
			
			switch (n) {
				case 'nativelistboxtest':

					var ed = tinyMCE.activeEditor;
					var title = ed.getParam('nativelistboxtest_title', '');
					var placeholder = ed.getParam('nativelistboxtest_placeholder', '');

					var mlb = cm.createListBox('mylistbox', {
							title : title,
							placeholder : placeholder,
							onselect : function(v) {
							tinyMCE.activeEditor.windowManager.alert('Value selected:' + v);
						}
					});

					var vv = ed.getParam('nativelistboxtest_options', []);

					tinymce.each(vv, function(v) {
						mlb.add(v.name, v.val, { group: v.group });
					});

					// // Add some values to the list box
					// mlb.add('Some item 1', 'val1');
					// mlb.add('some item 2', 'val2', { group : 'Some group' });
					// mlb.add('some item 3', 'val3', { group : 'Some group' });

					// Return the new listbox instance
					return mlb;
			}

			return null;
		},

		getInfo : function() {
			return {
				longname : 'NativeListBoxTestPlugin',
				author : 'TeamTypeform',
				authorurl : 'http://www.typeform.com',
				infourl : '',
				version : "1.0"
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('nativelistboxtest', tinymce.plugins.NativeListBoxTestPlugin);
})();