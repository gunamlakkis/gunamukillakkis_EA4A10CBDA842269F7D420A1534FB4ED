# Define a Student class with attributes: name, roll_number, and cgpa
class Student:
    def __init__(self, name, roll_number, cgpa):
        self.name = name
        self.roll_number = roll_number
        self.cgpa = cgpa

# Define the sorting function
def sort_students(student_list):
    # Sort the student list based on CGPA in descending order
    sorted_students = sorted(student_list, key=lambda x: x.cgpa, reverse=True)
    return sorted_students

# Sample student objects
students = [
    Student("Alice", "A101", 3.8),
    Student("Bob", "B102", 3.6),
    Student("Charlie", "C103", 4.0),
    Student("David", "D104", 3.9),
]

# Sorting students by CGPA in descending order
sorted_students = sort_students(students)

# Printing the sorted list
for student in sorted_students:
    print(f"Name: {student.name}, Roll Number: {student.roll_number}, CGPA: {student.cgpa}")