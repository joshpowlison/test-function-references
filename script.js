// Class for testing function instances
class FunctionContainer {
	localFunction() {}
	static StaticFunction() {}
}

// Function type class for testing function instances
function fFunctionContainer() {
	this.localFunction = function() {}
}

// The test runner
function runTest(name, functionA, functionB) {
	let isFunctionEqual = (functionA === functionB);
	
	console.log(name, isFunctionEqual);
}

// Our instances for testing
let classInstanceA = new FunctionContainer();
let classInstanceB = new FunctionContainer();

let functionInstanceA = new fFunctionContainer();
let functionInstanceB = new fFunctionContainer();

// Our tests
runTest(
	"Class Instance A localFunction === Class Instance A localFunction?",
	classInstanceA.localFunction,
	classInstanceA.localFunction
);

runTest(
	"Class Instance A localFunction === Class Instance B localFunction?",
	classInstanceA.localFunction,
	classInstanceB.localFunction
);

runTest(
	"Class Instance A localFunction === Class Instance A localFunction+bind(null)?",
	classInstanceA.localFunction,
	classInstanceA.localFunction.bind(null)
);

runTest(
	"Class Instance A localFunction === Class Instance A localFunction+bind(self)?",
	classInstanceA.localFunction,
	classInstanceA.localFunction.bind(classInstanceA)
);

runTest(
	"Class Instance A localFunction+bind(null) === Class Instance A localFunction+bind(null)?",
	classInstanceA.localFunction.bind(null),
	classInstanceA.localFunction.bind(null)
);

runTest(
	"Class Instance A localFunction+bind(self) === Class Instance A localFunction+bind(self)?",
	classInstanceA.localFunction.bind(classInstanceA),
	classInstanceA.localFunction.bind(classInstanceA)
);

runTest(
	"Class Instance A localFunction+bind(self) === Class Instance B localFunction+bind(self)?",
	classInstanceA.localFunction.bind(classInstanceA),
	classInstanceB.localFunction.bind(classInstanceB)
);

runTest(
	"Function Instance A localFunction === Function Instance A localFunction?",
	functionInstanceA.localFunction,
	functionInstanceA.localFunction
);

runTest(
	"Function Instance A localFunction === Function Instance B localFunction?",
	functionInstanceA.localFunction,
	functionInstanceB.localFunction
);

runTest(
	"Function Instance A localFunction === Function Instance A localFunction+bind(null)?",
	functionInstanceA.localFunction,
	functionInstanceA.localFunction.bind(null)
);

runTest(
	"Function Instance A localFunction === Function Instance A localFunction+bind(self)?",
	functionInstanceA.localFunction,
	functionInstanceA.localFunction.bind(classInstanceA)
);

runTest(
	"Function Instance A localFunction+bind(null) === Function Instance A localFunction+bind(null)?",
	functionInstanceA.localFunction.bind(null),
	functionInstanceA.localFunction.bind(null)
);

runTest(
	"Function Instance A localFunction+bind(self) === Function Instance A localFunction+bind(self)?",
	functionInstanceA.localFunction.bind(functionInstanceA),
	functionInstanceA.localFunction.bind(functionInstanceA)
);

runTest(
	"Function Instance A localFunction+bind(self) === Function Instance B localFunction+bind(self)?",
	functionInstanceA.localFunction.bind(functionInstanceA),
	functionInstanceB.localFunction.bind(functionInstanceB)
);

runTest(
	"StaticFunction === StaticFunction?",
	FunctionContainer.StaticFunction,
	FunctionContainer.StaticFunction
);

runTest(
	"StaticFunction === StaticFunction.bind(null)?",
	FunctionContainer.StaticFunction,
	FunctionContainer.StaticFunction.bind(null)
);

runTest(
	"StaticFunction === StaticFunction.bind(null)?",
	FunctionContainer.StaticFunction.bind(null),
	FunctionContainer.StaticFunction.bind(null)
);

runTest(
	"StaticFunction === StaticFunction.bind(Class Instance A)?",
	FunctionContainer.StaticFunction,
	FunctionContainer.StaticFunction.bind(classInstanceA)
);

runTest(
	"StaticFunction.bind(Class Instance A) === StaticFunction.bind(Class Instance A)?",
	FunctionContainer.StaticFunction.bind(classInstanceA),
	FunctionContainer.StaticFunction.bind(classInstanceA)
);