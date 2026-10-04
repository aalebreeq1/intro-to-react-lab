function StudentsList() {
    const students = ['Ahmad', 'Ali', 'Husna', 'Abdullah', 'Sarah', 'Zainab', 'Raghad', 'Sayed Hamed']
    return (
        <ul>
            {students.map((student) => {
                if (student === 'Sayed Hamed') return null;
                return <li key={student}>{student}</li>;
            })}
        </ul>
    );
}

export default StudentsList