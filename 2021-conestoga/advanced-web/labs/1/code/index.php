<!DOCTYPE html>
<html>
    <head>
        <title>Lab 1</title>
    </head>
    <body>
        <h1>Employees</h1>

        <?php
            ini_set('display_startup_errors', 1);
            ini_set('display_errors', 1);
            error_reporting(-1);

            $db = new SQLite3('lab1.db');

            echo "<table>";

            $results = $db->query('SELECT * FROM employees');
            while ($row = $results->fetchArray()) {
                echo "<tr>";

                echo "<td>" . $row['id'] . "</td>";
                echo "<td>" . $row['name'] . "</td>";
                echo "<td>" . $row['address'] . "</td>";
                echo "<td>" . $row['salary'] . "</td>";

                echo "</tr>";
            }

            echo "</table>"
        ?>
    </body>
</html>