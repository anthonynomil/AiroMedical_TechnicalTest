export const removeElement = (array: any[], element: any) => {
  return array.filter((el) => el !== element);
};

export const removeElements = (array: any[], elements: any[]) => {
  return array.filter((el) => !elements.includes(el));
};

export const addElement = (array: any[], element: any) => {
  return [...array, element];
};

export const toggleElement = (array: any[], element: any) => {
  return array.includes(element)
    ? removeElement(array, element)
    : addElement(array, element);
};
