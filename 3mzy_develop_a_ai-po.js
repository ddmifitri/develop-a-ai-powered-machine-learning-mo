/* 3mzy_develop_a_ai-po.js */

/* API Specification for AI-Powered Machine Learning Model Controller */

// Import required dependencies
const express = require('express');
const { MachineLearningModel } = require('./machineLearningModel');

// Create an instance of the Express app
const app = express();

// Define the API endpoint for model training
app.post('/train', async (req, res) => {
  try {
    const { dataset, modelConfig } = req.body;
    const model = new MachineLearningModel(modelConfig);
    await model.train(dataset);
    res.json({ message: 'Model trained successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error training model' });
  }
});

// Define the API endpoint for model prediction
app.post('/predict', async (req, res) => {
  try {
    const { inputData, modelConfig } = req.body;
    const model = new MachineLearningModel(modelConfig);
    const output = await model.predict(inputData);
    res.json({ output });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error making prediction' });
  }
});

// Define the API endpoint for model evaluation
app.post('/evaluate', async (req, res) => {
  try {
    const { dataset, modelConfig } = req.body;
    const model = new MachineLearningModel(modelConfig);
    const evaluationMetrics = await model.evaluate(dataset);
    res.json({ evaluationMetrics });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error evaluating model' });
  }
});

// Start the API server
const port = 3000;
app.listen(port, () => {
  console.log(`API server started on port ${port}`);
});