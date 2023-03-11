await import("./pyodide/pyodide.js");

const pyodide = await loadPyodide();
// await pyodide.loadPackage("numpy");
// await pyodide.runPythonAsync(`
// 	import numpy as np
// 	print(np)
// `);

await pyodide.runPythonAsync(`1 + 1`)