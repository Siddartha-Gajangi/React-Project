package com.hr.Alephys;

import java.io.*;
import java.util.*;

public class ExpenseTracker {
    private final List<Transaction> transactions = new ArrayList<>();
    private final String filePath = "transactions.txt";
    private final Scanner scanner = new Scanner(System.in);

    public void addTransaction() {
        System.out.println("Enter transaction type (income/expense): ");
        String type = scanner.nextLine().trim().toLowerCase();

        String category;
        if ("income".equals(type)) {
            System.out.println("Enter category (Salary/Business): ");
            category = scanner.nextLine().trim();
        } else if ("expense".equals(type)) {
            System.out.println("Enter category (Food/Rent/Travel): ");
            category = scanner.nextLine().trim();
        } else {
            System.out.println("Invalid type! Try again.");
            return;
        }

        System.out.println("Enter amount: ");
        double amount = scanner.nextDouble();
        scanner.nextLine(); 

        System.out.println("Enter date (YYYY-MM-DD): ");
        String date = scanner.nextLine().trim();

        transactions.add(new Transaction(type, category, amount, date));
        saveTransactions();
        System.out.println("Transaction added successfully!");
    }

    public void viewSummary(String month) {
        double totalIncome = 0, totalExpense = 0;
        Map<String, Double> categoryExpenses = new HashMap<>();

        for (Transaction t : transactions) {
            if (t.getDate().startsWith(month)) {
                if ("income".equalsIgnoreCase(t.getType())) {
                    totalIncome += t.getAmount();
                } else {
                    totalExpense += t.getAmount();
                    categoryExpenses.put(t.getCategory(), categoryExpenses.getOrDefault(t.getCategory(), 0.0) + t.getAmount());
                }
            }
        }

        System.out.println("\nSummary for " + month);
        System.out.println("Total Income: " + totalIncome);
        System.out.println("Total Expenses: " + totalExpense);
        System.out.println("Expenses by Category: " + categoryExpenses);
    }

    public void loadTransactions() {
        transactions.clear();
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = reader.readLine()) != null) {
                transactions.add(Transaction.fromString(line));
            }
        } catch (IOException e) {
            System.out.println("Error loading transactions: " + e.getMessage());
        }
    }

    private void saveTransactions() {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filePath, true))) { 
            Transaction lastTransaction = transactions.get(transactions.size() - 1); 
            writer.write(lastTransaction.toString());
            writer.newLine();
            writer.flush();
            System.out.println("Transaction saved successfully!");
        } catch (IOException e) {
            System.err.println("Error saving transaction: " + e.getMessage());
            e.printStackTrace();
        }
    }

    public void loadFromFile(String fileName) {
        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String line;
            while ((line = reader.readLine()) != null) {
                transactions.add(Transaction.fromString(line));
            }
            saveTransactions(); 
            System.out.println("Transactions loaded from file: " + fileName);
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}
