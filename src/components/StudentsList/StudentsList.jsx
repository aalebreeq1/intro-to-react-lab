function StudentsList() {
    const students = ['Ahmad', 'Ali', 'Husna', 'Abdullah', 'Sarah', 'Zainab', 'Raghad', 'Sayed Hamed']
    return (
        <ul>
            {students.map((student) => {
                return student !== 'Sayed Hamed' ? <li key={student}>{student}</li> : null;
            })}
        </ul>
    );
}

export default StudentsList