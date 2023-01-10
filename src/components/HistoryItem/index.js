import './index.css'

const HistoryItem = paras => {
  const {historyItem, deleteItem} = paras
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItem

  const deleteElementTrigger = () => {
    deleteItem(id)
  }

  return (
    <li className="full-container">
      <div>
        <p>{timeAccessed}</p>
      </div>
      <div className="sub-container">
        <img src={logoUrl} alt="domain logo" className="image" />
        <div className="title-url-container">
          <p className="website">{title}</p>
          <p className="url website"> {domainUrl}</p>
        </div>
        <button
          type="button"
          data-testid="delete"
          onClick={deleteElementTrigger}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
