package com.hr.Alephys;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        ExpenseTracker tracker = new ExpenseTracker();
        @SuppressWarnings("resource")
		Scanner scanner = new Scanner(System.in);

        System.out.println("Do you want to load transactions from a file? (yes/no)");
        String loadChoice = scanner.nextLine().trim().toLowerCase();
        if ("yes".equals(loadChoice)) {
            System.out.println("Enter file name: ");
            String fileName = scanner.nextLine().trim();
            tracker.loadFromFile(fileName);
        } else {
            tracker.loadTransactions(); 
        }

        while (true) {
            System.out.println("\nChoose an option: ");
            System.out.println("1. Add Transaction");
            System.out.println("2. View Monthly Summary");
            System.out.println("3. Exit");
            System.out.print("Enter choice: ");

            int choice = scanner.nextInt();
            scanner.nextLine(); 

            switch (choice) {
                case 1:
                    tracker.addTransaction();
                    break;
                case 2:
                    System.out.println("Enter month (YYYY-MM): ");
                    String month = scanner.nextLine();
                    tracker.viewSummary(month);
                    break;
                case 3:
                    System.out.println("Exiting program.");
                    return;
                default:
                    System.out.println("Invalid choice! Try again.");
            }
        }
    }
}
