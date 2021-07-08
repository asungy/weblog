
// Returns Date object and formatted date string
// Example: 06-28-2021 ---> June 28, 2021
export function convertDate(date) {
  let dateObj;
  try {
    const match = date.match(/([0-9]{2})-([0-9]{2})-([0-9]{4})/);
    dateObj = new Date(match[3], match[1], match[2]);
  } catch (error) {
    console.error(`Date string must be in format MM-DD-YYY.`);
    return;
  }

  // Convert month value to name
  let dateString;
  switch (dateObj.getMonth()){
    case 1:
      dateString = `January ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
      break;
    case 2:
      dateString = `February ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
      break;
    case 3:
      dateString = `March ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
      break;
    case 4:
      dateString = `April ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
      break;
    case 5:
      dateString = `May ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
      break;
    case 6:
      dateString = `June ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
      break;
    case 7:
      dateString = `July ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
      break;
    case 8:
      dateString = `August ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
      break;
    case 9:
      dateString = `September ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
      break;
    case 10:
      dateString = `October ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
      break;
    case 11:
      dateString = `November ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
      break;
    case 12:
      dateString = `December ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
      break;
    default:
      dateString = date;
  }
  return { dateObj, dateString };
}

// Creates date object for each node and returns a modified list
export function createPostObjects(nodeList) {
  let objList = [];

  nodeList.forEach((node) => {
    const { title, path, date, description } = node.frontmatter;

    // Parse date values from frontmatter
    const { dateObj, dateString } = convertDate(date);

    objList.push({
      title,
      path,
      description,
      dateObj,
      dateString,
    });
  });

  return objList;
}

