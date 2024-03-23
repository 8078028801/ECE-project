// const students = require("./Studentsschema");

const student = require("./Studentsschema");

const deleteData = async (req, res) => {
    try {
        const deleteId = req.params.id;
        const removedStudent = await student.findOneAndDelete({ _id: deleteId });
        if (!removedStudent) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json({ message: 'Student removed successfully' });
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = deleteData;