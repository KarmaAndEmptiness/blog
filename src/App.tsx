import './App.css'
import { NotionEditor } from '@/components/tiptap-templates/notion-like/notion-like-editor'
function App() {

  return <NotionEditor room="my-document-room" placeholder="Start writing..." />
}

export default App
