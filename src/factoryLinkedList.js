function createNode(value = null, nextNode = null) {
  return { value, nextNode };
}

const linkedListMethods = {
  append(value) {
    let pointer = this.listHead;
    if (pointer === null) {
      this.listHead = createNode(value);
    } else {
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = createNode(value);
    }
  },

  prepend(value) {
    this.listHead = createNode(value, this.listHead);
  },

  size() {
    let numberOfNodes = 0;
    let pointer = this.listHead;
    while (pointer !== null) {
      numberOfNodes += 1;
      pointer = pointer.nextNode;
    }
    return numberOfNodes;
  },

  head() {
    return this.listHead;
  },

  tail() {
    let pointer = this.listHead;
    while (pointer !== null) {
      if (pointer.nextNode === null) {
        break;
      }
      pointer = pointer.nextNode;
    }
    return pointer === null ? undefined : pointer;
  },

  at(index) {
    if (index === undefined) {
      return undefined;
    }
    let pointer = this.listHead;
    let i = 0;
    while (pointer !== null && i < index) {
      pointer = pointer.nextNode;
      i += 1;
    }
    return pointer === null ? undefined : pointer;
  },

  pop() {
    let previous;
    let pointer = this.listHead;
    if (pointer === null) return;
    if (previous === undefined && pointer.nextNode === null) {
      this.listHead = null;
    } else {
      while (pointer !== null) {
        previous = pointer;
        pointer = pointer.nextNode;
        if (pointer.nextNode === null) {
          previous.nextNode = null;
          break;
        }
      }
    }
  },

  contains(value) {
    let pointer = this.listHead;
    while (pointer !== null) {
      if (pointer.value === value) {
        return true;
      }
      pointer = pointer.nextNode;
    }
    return false;
  },

  find(value) {
    let pointer = this.listHead;
    let index = 0;
    while (pointer !== null) {
      if (pointer.value === value) {
        return index;
      }
      pointer = pointer.nextNode;
      index += 1;
    }
    return null;
  },

  toString() {
    let pointer = this.listHead;
    let str = '';
    while (pointer !== null) {
      str += `( ${pointer.value} ) -> `;
      pointer = pointer.nextNode;
    }
    str += 'null';
    return str;
  },

  insertAt(value, index) {
    let previous;
    let pointer = this.listHead;
    let i = 0;
    while (pointer !== null && i < index) {
      if (pointer.nextNode === null && i !== index - 1) {
        pointer.nextNode = createNode();
      }
      previous = pointer;
      pointer = pointer.nextNode;
      i += 1;
    }
    if (previous !== undefined && index > 0) {
      previous.nextNode = createNode(value, pointer);
    } else {
      this.listHead = createNode(value, this.listHead);
    }
  },

  removeAt(index) {
    let previous;
    let pointer = this.listHead;
    let i = 0;
    while (pointer !== null && i < index) {
      previous = pointer;
      pointer = pointer.nextNode;
      i += 1;
    }
    if (previous !== undefined && pointer !== null) {
      previous.nextNode = pointer.nextNode;
    } else if (previous === undefined) {
      this.listHead = this.listHead.nextNode;
    }
  },
};

function createLinkedList() {
  const list = Object.create(linkedListMethods);
  list.listHead = null;
  return list;
}

export default createLinkedList;
