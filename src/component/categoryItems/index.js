import './index.css'

const CategoryItems = props => {
  const {tabsList, getTabId, isActive} = props

  const {tabId, displayText} = tabsList

  const ClassName = isActive ? 'present' : ''

  const sendTabId = () => {
    getTabId(tabId)
  }

  return (
    <li>
      <button onClick={sendTabId} className="category-btn" type="button">
        <h1 className={`category-head ${ClassName}`}>{displayText}</h1>
      </button>
    </li>
  )
}

export default CategoryItems
