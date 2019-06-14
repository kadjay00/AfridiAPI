import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INBOX', {schema: 'dbo' } )
export class T_INBOX {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 15,
        name: 'INB_FILENAME_C',
        })
    public INB_FILENAME_C: string;

    @Column('varchar', {
        nullable: true,
        name: 'INB_BATFILE_C',
        })
    public INB_BATFILE_C: string | null;

}
