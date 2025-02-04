package utils;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

public class ExcelUtils {

    private static final String FILE_PATH = "resources/testdata.xlsx";

    public static String getCellData(int row, int col) {
        try (FileInputStream file = new FileInputStream(new File(FILE_PATH));
             Workbook workbook = new XSSFWorkbook(file)) {
            Sheet sheet = workbook.getSheetAt(0);
            Row dataRow = sheet.getRow(row);
            Cell cell = dataRow.getCell(col);
            return cell.getStringCellValue();
        } catch (IOException e) {
            e.printStackTrace();
            return "";
        }
    }
}
