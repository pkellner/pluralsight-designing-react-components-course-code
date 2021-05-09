function SpeakersToolbar() {
  return (
    <section className="toolbar dark-theme-header">
      <div className="container">
        <div className="justify-content-between">
          <ul className="toolrow d-flex flex-column flex-lg-row">
            <li className="d-flex flex-column flex-md-row">
              <b>Show Sessions&nbsp;&nbsp;</b>
              <label className="fav">
                <input type="checkbox" checked={true} />
                <span className="switch"></span>
              </label>
            </li>
            <li className="d-flex flex-column flex-md-row ml-sm-5 ml-0">
              <strong>Theme</strong>
              <label classname="dropdown">
                <select className="form-control theme" value="light">
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SpeakersToolbar;
