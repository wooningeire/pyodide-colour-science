// Works in browser only! Not sure why pyodide can't be imported correctly in Node.

await import("https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js");

const pyodide = await loadPyodide();
await pyodide.loadPackage("micropip");

const outProxy = await pyodide.runPythonAsync(`
# workaround presented by https://github.com/pyodide/pyodide/issues/1603#issuecomment-850794345 
import sys
sys.modules["_multiprocessing"] = object()

import micropip
await micropip.install("colour-science")

import colour
# example 3.12.2 https://pypi.org/project/colour-science/#colour-models-colour-models
colour.XYZ_to_Luv([0.20654008, 0.12197225, 0.05136952]) # [ 41.52787529,  52.63858304,  26.92317922]
`);
console.log(outProxy.toJs());
outProxy.destroy();