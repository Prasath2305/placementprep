"use client";
import React, { useRef, useState } from "react";
import { ModeToggleBtn } from "./mode-toggle-btn";
import SelectLanguages from "./SelectLanguages";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../ui/editor/resizable";
import Editor from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { Button } from "../../ui/editor/button";
import { Loader, Play, TriangleAlert } from "lucide-react";
import { codeSnippets, languageOptions } from "../../config/config";
import { compileCode } from "../../actions/compile";
import toast from "react-hot-toast";

export default function EditorComponent() {
  const { theme } = useTheme();
  const [sourceCode, setSourceCode] = useState(codeSnippets["python"]);
  const [languageOption, setLanguageOption] = useState(languageOptions[0]);
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState([]);
  const [err, setErr] = useState(false);
  const [question, setQuestion] = useState(
    "Write a function that adds two numbers and returns the result."
  );

  const editorRef = useRef(null);

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
    editor.focus();
  }

  function handleOnchange(value) {
    if (value) {
      setSourceCode(value);
    }
  }

  function onSelect(value) {
    setLanguageOption(value);
    setSourceCode(codeSnippets[value.language]);
  }

  async function executeCode() {
    setLoading(true);
    const requestData = {
      language: languageOption.language,
      version: languageOption.version,
      files: [
        {
          content: sourceCode,
        },
      ],
    };
    try {
      const result = await compileCode(requestData);
      setOutput(result.run.output.split("\n"));
      setLoading(false);
      setErr(false);
      toast.success("Compiled Successfully");
    } catch (error) {
      setErr(true);
      setLoading(false);
      toast.error("Failed to compile the Code");
      console.log(error);
    }
  }

  return (
      <div className="min-h-screen bg-black text-slate-100 rounded-2xl shadow-2xl py-6 px-8">
        <div className="flex items-center justify-between pb-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
            Code Playground
          </h2>
          <div className="flex items-center space-x-2">
            <div className="w-[230px]">
              <SelectLanguages
                onSelect={onSelect}
                selectedLanguageOption={languageOption}
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 p-3 rounded-2xl">
          <ResizablePanelGroup
            direction="horizontal"
            className="w-full rounded-lg border border-slate-700 bg-slate-900"
          >
            <ResizablePanel defaultSize={25} minSize={20}>
              <div className="h-full p-4 bg-slate-800 overflow-auto rounded-xl border border-slate-700">
                <h3 className="text-lg font-semibold mb-4">Question</h3>
                <div className="p-4 bg-slate-700 rounded-lg">{question}</div>
              </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={50} minSize={30}>
              <Editor
                theme={theme === "dark" ? "vs-dark" : "vs-dark"} // force dark editor
                height="100vh"
                defaultLanguage={languageOption.language}
                defaultValue={sourceCode}
                onMount={handleEditorDidMount}
                value={sourceCode}
                onChange={handleOnchange}
                language={languageOption.language}
              />
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={25} minSize={20}>
              <div className="space-y-3 bg-slate-800 h-full rounded-xl border border-slate-700">
                <div className="flex items-center justify-between bg-slate-900 px-6 py-2 rounded-t-xl border-b border-slate-700">
                  <h2>Output</h2>
                  {loading ? (
                    <Button
                      disabled
                      size={"sm"}
                      className="bg-purple-600 hover:bg-purple-700 text-slate-100"
                    >
                      <Loader className="w-4 h-4 mr-2 animate-spin" />
                      <span>Running...</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={executeCode}
                      size={"sm"}
                      className="bg-purple-600 hover:bg-purple-700 text-slate-100"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      <span>Run</span>
                    </Button>
                  )}
                </div>

                <div className="px-6 space-y-2 h-[calc(100%-50px)] overflow-auto">
                  {err ? (
                    <div className="flex items-center space-x-2 text-red-500 border border-red-600 px-6 py-6 rounded-lg">
                      <TriangleAlert className="w-5 h-5 mr-2 flex-shrink-0" />
                      <p className="text-xs">
                        Failed to Compile the Code, Please try again!
                      </p>
                    </div>
                  ) : (
                    <>
                      {output.map((item) => (
                        <p className="text-sm" key={item}>
                          {item}
                        </p>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
  );
}
