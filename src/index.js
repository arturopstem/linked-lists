import createLinkedList from './factoryLinkedList';
import LinkedList from './linked-list';

const factoryList = createLinkedList();
console.log('factoryList:', factoryList);

factoryList.append(42);
factoryList.append(666);
factoryList.append(100);
factoryList.prepend(100);
console.log(factoryList.toString());

factoryList.pop();
console.log(factoryList.toString());

console.log(factoryList.contains(42));

factoryList.insertAt(69, 5);
console.log(factoryList.toString());

factoryList.removeAt(0);
console.log(factoryList.toString());

console.log();
const classList = new LinkedList();
console.log('classList:', classList);

classList.append(42);
classList.append(666);
classList.append(100);
classList.prepend(100);
console.log(classList.toString());

classList.pop();
console.log(classList.toString());

console.log(classList.contains(42));

classList.insertAt(69, 5);
console.log(classList.toString());

classList.removeAt(0);
console.log(classList.toString());
