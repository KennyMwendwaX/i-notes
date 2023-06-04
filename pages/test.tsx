import {
  $createParagraphNode,
  $createTextNode,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  EditorState,
  ParagraphNode,
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
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  ListNode,
  ListItemNode,
} from "@lexical/list";
import { useEffect } from "react";

const theme = {
  // Theme styling goes here
  heading: {
    h1: "text-2xl text-green-700",
    h2: "text-xl text-red-700",
    h3: "text-lg text-yellow-600",
  },
  paragraph: "text-base text-indigo-700",
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

type HeadingTagType = "h1" | "h2" | "h3";

function HeadingToolbarPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const HeadingTags = ["h1", "h2", "h3"];
  const onClick = (tag: HeadingTagType): void => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createHeadingNode(tag));
      }
    });
  };

  return (
    <div className="space-x-2">
      {HeadingTags.map((tag) => (
        <button
          className="rounded-lg bg-blue-600 px-3 py-2 text-white"
          onClick={() => onClick(tag as HeadingTagType)}
          key={tag}>
          {tag.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

type ListTagType = "ol" | "ul";

function ListToolbarPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const listTags = ["ol", "ul"];
  const onClick = (tag: ListTagType): void => {
    if (tag === "ol") {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
      return;
    }
    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
  };

  return (
    <div className="space-x-2">
      {listTags.map((tag) => (
        <button
          className="rounded-lg bg-blue-600 px-3 py-2 text-white"
          onClick={() => onClick(tag as ListTagType)}
          key={tag}>
          {tag.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function ToolbarPlugin(): JSX.Element {
  return (
    <div className="flex items-center space-x-2">
      <HeadingToolbarPlugin />
      <ListToolbarPlugin />
    </div>
  );
}

export default function Test() {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    nodes: [HeadingNode, ParagraphNode, ListNode, ListItemNode],
  };
  return (
    <>
      <div className="container mx-auto mb-2 px-5 py-20">
        <LexicalComposer initialConfig={initialConfig}>
          <ToolbarPlugin />
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="block h-96 w-3/5 rounded-lg border-0 bg-white p-3 text-sm text-gray-800 outline-none focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400" />
            }
            placeholder={
              <div className="absolute top-[132px] px-3">
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
