/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('collaborations', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    note_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    user_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });

  pgm.addConstraint('collaborations', 'unique_note_id_and_user_id', 'UNIQUE(note_id, user_id)');
};

exports.down = (pgm) => {
  pgm.dropTable('collaborations');
};
