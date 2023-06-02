import {
  $createParagraphNode,
  $createTextNode,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  EditorState,
} from "lexical";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HeadingNode, $createHeadingNode } from "@lexical/rich-text";
import { $setBlocksType } from "@lexical/selection";
import { MouseEventHandler, useEffect } from "react";

const theme = {
  // Theme styling goes here
  heading: {
    h1: "text-2xl text-green-700",
    h2: "editor-heading-h2",
    h3: "editor-heading-h3",
    h4: "editor-heading-h4",
    h5: "editor-heading-h5",
    h6: "editor-heading-h6",
  },
  paragraph: "text-lg text-indigo-700",
  text: {
    bold: "font-bold text-green-600",
    italic: "font-italic",
    code: "editor-textCode",
    strikethrough: "editor-textStrikethrough",
    subscript: "editor-textSubscript",
    superscript: "editor-textSuperscript",
    underline: "editor-textUnderline",
    underlineStrikethrough: "editor-textUnderlineStrikethrough",
  },
};

function MyOnChangePlugin(props: {
  onChange: (editorState: EditorState) => void;
}) {
  const { onChange } = props;
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    });
  }, [onChange, editor]);
  return null;
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: Error) {
  console.log(error);
}

function MyHeadingPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext();
  // const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
  //   editor.update(() => {
  //     const selection = $getSelection();
  //     if ($isRangeSelection(selection)) {
  //       $setBlocksType(selection, () => $createHeadingNode("h1"));
  //     }
  //   });
  // };
  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    editor.update(() => {
      // Get the RootNode from the EditorState
      const root = $getRoot();

      // Get the selection from the EditorState
      const selection = $getSelection();

      // Create a new ParagraphNode
      const paragraphNode = $createParagraphNode();

      // Create a new TextNode
      const textNode = $createTextNode("Hello world");

      // Append the text node to the paragraph
      paragraphNode.append(textNode);

      // Finally, append the paragraph to the root
      root.append(paragraphNode);
    });
  };

  return <button onClick={onClick}>Heading</button>;
}

export default function Test() {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    node: [HeadingNode],
  };
  return (
    <>
      <div className="container mx-auto mb-2 px-5 py-20">
        <LexicalComposer initialConfig={initialConfig}>
          <MyHeadingPlugin />
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="block h-96 w-3/5 rounded-lg border-0 bg-white p-3 text-sm text-gray-800 outline-none focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400" />
            }
            placeholder={
              <div className="absolute top-[115px] px-3">
                Enter some text...
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <MyOnChangePlugin
            onChange={(editorState) => {
              console.log(editorState);
            }}
          />
          <HistoryPlugin />
        </LexicalComposer>
      </div>
    </>
  );
}
