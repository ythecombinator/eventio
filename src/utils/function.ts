const compose = (...fs) => (value) => fs.reduceRight((accu, curr) => curr(accu), value);

export {compose};
