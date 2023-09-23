function createTaskItem(task) {
  const taskItem = document.createElement("div");
  taskItem.classList.add("task");
  taskItem.innerHTML = `
      <p>${task.title}</p>
      <ul>
        ${task.list
          .map(
            (item, index) => `
          <li>
            <input type="checkbox" id="${task.title.replace(
              /\s/g,
              ""
            )}-${index}" ${item.checked ? "checked" : ""} />
            <label for="${task.title.replace(/\s/g, "")}-${index}">${
              item.name
            }</label>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  return taskItem;
}

function populateTasks(tasksData) {
  const taskListContainer = document.getElementById("taskList");

  tasksData.tasks.forEach((task) => {
    const taskItem = createTaskItem(task);
    taskListContainer.appendChild(taskItem);
  });
}

async function loadTasksData() {
  try {
    // Attempt to fetch data from GitHub
    const githubResponse = await fetch(
      "https://raw.githubusercontent.com/brunovjk/frontend-resume/main/src/assets/lists/tasks.json"
    );

    if (githubResponse.ok) {
      // If successful, use GitHub data
      const tasksData = await githubResponse.json();
      populateTasks(tasksData);
    } else {
      // If GitHub fetch fails, fall back to local file
      const localResponse = await fetch("assets/lists/tasks.json");
      if (!localResponse.ok) {
        throw new Error("Failed to fetch JSON data");
      }
      const tasksData = await localResponse.json();
      populateTasks(tasksData);
    }
  } catch (error) {
    console.error("Error loading JSON data:", error);
  }
}

loadTasksData();
