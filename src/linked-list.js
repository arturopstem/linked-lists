import Node from './node';

class LinkedList {
  #head;

  constructor() {
    this.#head = null;
  }

  append(value) {
    let pointer = this.#head;
    if (pointer === null) {
      this.#head = new Node(value);
    } else {
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = new Node(value);
    }
  }

  prepend(value) {
    this.#head = new Node(value, this.#head);
  }

  size() {
    let numberOfNodes = 0;
    let pointer = this.#head;
    while (pointer !== null) {
      numberOfNodes += 1;
      pointer = pointer.nextNode;
    }
    return numberOfNodes;
  }

  head() {
    return this.#head;
  }

  tail() {
    let pointer = this.#head;
    while (pointer !== null) {
      if (pointer.nextNode === null) {
        break;
      }
      pointer = pointer.nextNode;
    }
    return pointer === null ? undefined : pointer;
  }

  at(index) {
    if (index === undefined) {
      return undefined;
    }
    let pointer = this.#head;
    let i = 0;
    while (pointer !== null && i < index) {
      pointer = pointer.nextNode;
      i += 1;
    }
    return pointer === null ? undefined : pointer;
  }

  pop() {
    let previous;
    let pointer = this.#head;
    if (pointer === null) return;
    if (previous === undefined && pointer.nextNode === null) {
      this.#head = null;
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
  }

  contains(value) {
    let pointer = this.#head;
    while (pointer !== null) {
      if (pointer.value === value) {
        return true;
      }
      pointer = pointer.nextNode;
    }
    return false;
  }

  find(value) {
    let pointer = this.#head;
    let index = 0;
    while (pointer !== null) {
      if (pointer.value === value) {
        return index;
      }
      pointer = pointer.nextNode;
      index += 1;
    }
    return null;
  }

  toString() {
    let pointer = this.#head;
    let str = '';
    while (pointer !== null) {
      str += `( ${pointer.value} ) -> `;
      pointer = pointer.nextNode;
    }
    str += 'null';
    return str;
  }

  insertAt(value, index) {
    let previous;
    let pointer = this.#head;
    let i = 0;
    while (pointer !== null && i < index) {
      if (pointer.nextNode === null && i !== index - 1) {
        pointer.nextNode = new Node();
      }
      previous = pointer;
      pointer = pointer.nextNode;
      i += 1;
    }
    if (previous !== undefined && index > 0) {
      previous.nextNode = new Node(value, pointer);
    } else {
      this.#head = new Node(value, this.#head);
    }
  }

  removeAt(index) {
    let previous;
    let pointer = this.#head;
    let i = 0;
    while (pointer !== null && i < index) {
      previous = pointer;
      pointer = pointer.nextNode;
      i += 1;
    }
    if (previous !== undefined && pointer !== null) {
      previous.nextNode = pointer.nextNode;
    } else if (previous === undefined) {
      this.#head = this.#head.nextNode;
    }
  }
}

export default LinkedList;
