import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  field: {
    fontSize: 12,
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
  },
});

// Create Document Component
const PDFDocument = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Form Submission</Text>
        {Object.entries(formData).map(([key, value]) => (
          <View key={key} style={styles.field}>
            <Text style={styles.label}>{key}:</Text>
            <Text>{value}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

// PDF Generator Component
const PDFGenerator = ({ formData }) => {
  return (
    <PDFViewer style={{ width: '100%', height: '500px' }}>
      <PDFDocument formData={formData} />
    </PDFViewer>
  );
};

export default PDFGenerator; 