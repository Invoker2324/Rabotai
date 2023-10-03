# Rabotai






using System;

public class Program
{
    public static void Main()
    {
        Console.WriteLine("Введите значение a:");
        double a = Convert.ToDouble(Console.ReadLine());

        Console.WriteLine("Введите значение b:");
        double b = Convert.ToDouble(Console.ReadLine());

        Console.WriteLine("Введите значение c:");
        double c = Convert.ToDouble(Console.ReadLine());

        double discriminant = b * b - 4 * a * c;

        if (discriminant > 0)
        {
            double x1 = (-b + Math.Sqrt(discriminant)) / (2 * a);
            double x2 = (-b - Math.Sqrt(discriminant)) / (2 * a);
            Console.WriteLine($"Корни уравнения: x1 = {x1}, x2 = {x2}");
        }
        else if (discriminant == 0)
        {
            double x = -b / (2 * a);
            Console.WriteLine($"Уравнение имеет один корень: x = {x}");
        }
        else
        {
            Console.WriteLine("Уравнение не имеет вещественных корней.");
        }
    }
}
