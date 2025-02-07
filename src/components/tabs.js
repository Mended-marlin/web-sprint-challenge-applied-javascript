const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const topicsTabs  = document.createElement("div")
  topicsTabs.classList += "topics"
  topics.forEach(topic => {
    let creation = document.createElement("div")
    creation.classList += "tab"
    creation.textContent = topic
    topicsTabs.append(creation)
  });

  return topicsTabs
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  async function getData() {
    const appendage = document.querySelector(selector)
    const response = await fetch("http://localhost:5001/api/topics").then(data => data.json())


    let filledTabs = Tabs(response.topics)

    appendage.append(filledTabs)

  }

  getData()

  
}

export { Tabs, tabsAppender }
