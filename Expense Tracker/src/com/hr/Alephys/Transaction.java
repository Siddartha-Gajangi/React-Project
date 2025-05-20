package com.hr.Alephys;

public class Transaction {
    private final String type;
    private final String category;
    private final double amount;
    private final String date;

    public Transaction(String type, String category, double amount, String date) {
        this.type = type;
        this.category = category;
        this.amount = amount;
        this.date = date;
    }

    public String getType() {
        return type;
    }

    public String getCategory() {
        return category;
    }

    public double getAmount() {
        return amount;
    }

    public String getDate() {
        return date;
    }

    @Override
    public String toString() {
        return type + "," + category + "," + amount + "," + date;
    }

    public static Transaction fromString(String line) {
        String[] parts = line.split(",");
        return new Transaction(parts[0], parts[1], Double.parseDouble(parts[2]), parts[3]);
    }
}
