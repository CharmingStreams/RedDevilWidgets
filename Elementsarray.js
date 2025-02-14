document.getElementById('add-element-button').addEventListener('click', function() {
  const container = document.getElementById('field-container');
  const elementCount = document.querySelectorAll('.element').length + 1;

  // Create a new div for the new element
  const newElementDiv = document.createElement('div');
  newElementDiv.classList.add('element');

  // Create input fields for the new element
  const nameField = document.createElement('input');
  nameField.type = 'text';
  nameField.name = `el${elementCount}Name`;
  nameField.placeholder = `Enter Name for Element ${elementCount}`;

  const iconField = document.createElement('input');
  iconField.type = 'text';
  iconField.name = `el${elementCount}Icon`;
  iconField.placeholder = `Enter Icon for Element ${elementCount}`;

  const linkField = document.createElement('input');
  linkField.type = 'text';
  linkField.name = `el${elementCount}IconLink`;
  linkField.placeholder = `Enter Icon Link for Element ${elementCount}`;

  const colorField = document.createElement('input');
  colorField.type = 'color';
  colorField.name = `el${elementCount}Color`;
  colorField.placeholder = `Choose Color for Element ${elementCount}`;

  const showImageField = document.createElement('select');
  showImageField.name = `el${elementCount}IconShow`;
  const optionNone = document.createElement('option');
  optionNone.value = 'none';
  optionNone.text = 'None';
  const optionFontAwesome = document.createElement('option');
  optionFontAwesome.value = 'fontawesome';
  optionFontAwesome.text = 'FontAwesome Icon';
  const optionURL = document.createElement('option');
  optionURL.value = 'url';
  optionURL.text = 'Upload Icon';
  showImageField.append(optionNone, optionFontAwesome, optionURL);

  const orderField = document.createElement('select');
  orderField.name = `icon${elementCount}SocialOrder`;
  const optionIconFirst = document.createElement('option');
  optionIconFirst.value = 'iconfirst';
  optionIconFirst.text = 'Icon First';
  const optionSocialFirst = document.createElement('option');
  optionSocialFirst.value = 'socialfirst';
  optionSocialFirst.text = 'Name First';
  orderField.append(optionIconFirst, optionSocialFirst);

  // Append the new input fields to the new div
  newElementDiv.appendChild(nameField);
  newElementDiv.appendChild(iconField);
  newElementDiv.appendChild(linkField);
  newElementDiv.appendChild(colorField);
  newElementDiv.appendChild(showImageField);
  newElementDiv.appendChild(orderField);

  // Append the new div to the container
  container.appendChild(newElementDiv);

  // Add new element to the elements array
  elements.push({
    name: `{{el${elementCount}Name}}`,
    icon: `{{el${elementCount}Icon}}`,
    link: `{{el${elementCount}IconLink}}`,
    color: `{{el${elementCount}Color}}`,
    showImage: `{{el${elementCount}IconShow}}`,
    order: `{{icon${elementCount}SocialOrder}}`
  });

  // Update the UI or perform any other actions needed
  updateUI();
});

// Your existing JavaScript functions and logic
function updateUI() {
  // Update the UI with the new elements or perform any other necessary actions
}
