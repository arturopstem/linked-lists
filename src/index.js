import createLinkedList from './factoryLinkedList';

const factoryList = createLinkedList();

factoryList.append(42);
factoryList.append(666);
factoryList.append(100);
factoryList.prepend(100);
console.log(factoryList.toString());

factoryList.pop();
console.log(factoryList.toString());

console.log(factoryList.contains(42));
