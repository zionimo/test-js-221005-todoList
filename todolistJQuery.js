const todoForm = $("#todo-form");
const todoInput = $("#todo-form #todo-input");

const countText = $("#count");
const count = 0;

todoForm.on("submit", todoAdd);

function todoAdd(e) {
  e.preventDefault();

  const li = $("<li>");
  const checkbox = $("<input>");
  checkbox.attr("type", "checkbox");
  const button = $("<button>");
  button.html("X");

  li.append(checkbox).append(todoInput.val()).append(button);

  $("#todo-board").append(li);

  todoInput.val("");

  checkbox.on("click", todoCheck);
  button.on("click", todoDelete);
}

function todoCheck() {
  // attr : html 태그에 직접 붙는 속성
  // prop : html 객체가 가지고 있는 속성
  if ($(this).prop("checked")) {
    $(this).parent().attr("style", "color:lightgray");
  } else {
    $(this).parent().attr("style", "color: black");
  }
}

count = $("#todo-board li input: checked").length;

function todoDelete() {
  $(this).parent().remove();
  count = $("#todo-board li input:checked").length;
  countText.html(count);
}
