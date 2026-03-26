import java.io.*;
import java.util.*;

public class FileHandlingUtility {

    // File path
    static String filePath = "sample.txt";

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("\n===== FILE HANDLING UTILITY =====");
            System.out.println("1. Write to File");
            System.out.println("2. Read File");
            System.out.println("3. Modify File (Replace Word)");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");

            int choice = sc.nextInt();
            sc.nextLine(); // consume newline

            switch (choice) {
                case 1:
                    writeFile(sc);
                    break;
                case 2:
                    readFile();
                    break;
                case 3:
                    modifyFile(sc);
                    break;
                case 4:
                    System.out.println("Exiting program...");
                    return;
                default:
                    System.out.println("Invalid choice!");
            }
        }
    }

    // Method to write data into file
    public static void writeFile(Scanner sc) {
        try {
            FileWriter writer = new FileWriter(filePath, true); // append mode
            System.out.print("Enter text to write: ");
            String text = sc.nextLine();

            writer.write(text + "\n");
            writer.close();

            System.out.println("Data written successfully!");
        } catch (IOException e) {
            System.out.println("Error writing file: " + e.getMessage());
        }
    }

    // Method to read data from file
    public static void readFile() {
        try {
            File file = new File(filePath);
            Scanner reader = new Scanner(file);

            System.out.println("\n--- File Content ---");
            while (reader.hasNextLine()) {
                System.out.println(reader.nextLine());
            }
            reader.close();

        } catch (FileNotFoundException e) {
            System.out.println("File not found!");
        }
    }

    // Method to modify file content (replace word)
    public static void modifyFile(Scanner sc) {
        try {
            File file = new File(filePath);
            Scanner reader = new Scanner(file);

            StringBuilder content = new StringBuilder();

            // Read existing content
            while (reader.hasNextLine()) {
                content.append(reader.nextLine()).append("\n");
            }
            reader.close();

            System.out.print("Enter word to replace: ");
            String oldWord = sc.nextLine();

            System.out.print("Enter new word: ");
            String newWord = sc.nextLine();

            // Replace content
            String modifiedContent = content.toString().replaceAll(oldWord, newWord);

            // Write updated content back
            FileWriter writer = new FileWriter(filePath);
            writer.write(modifiedContent);
            writer.close();

            System.out.println("File modified successfully!");

        } catch (IOException e) {
            System.out.println("Error modifying file: " + e.getMessage());
        }
    }
}
