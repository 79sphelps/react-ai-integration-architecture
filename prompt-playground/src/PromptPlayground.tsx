import {
  PromptEditor,
  VariablesPanel,
  OutputViewer,
  TemperatureSlider,
  JsonSchemaEditor,
  RunButton,
} from './components/index'
import { usePromptPlayground } from './hooks/usePromptPlayground'

export default function PromptPlayground() {
  const state = usePromptPlayground()

  return (
    <div className="h-screen grid grid-cols-2 gap-6 p-6 bg-gray-50">
      <div className="space-y-4 overflow-auto">
        <PromptEditor {...state} />
        <VariablesPanel {...state} />
        <TemperatureSlider {...state} />
        <JsonSchemaEditor {...state} />
        <RunButton {...state} />
      </div>

      <OutputViewer {...state} />
    </div>
  )
}