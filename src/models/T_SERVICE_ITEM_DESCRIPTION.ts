import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SERVICE_ITEM_DESCRIPTION', {schema: 'dbo' } )
export class T_SERVICE_ITEM_DESCRIPTION {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'SID_IDNUMBER_C',
        })
    public SID_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'SID_FIELDID_C',
        })
    public SID_FIELDID_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'SID_LANGUAGECODE_C',
        })
    public SID_LANGUAGECODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'SID_DESCRIPTION_C',
        })
    public SID_DESCRIPTION_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SID_UPDATEFLAG_C',
        })
    public SID_UPDATEFLAG_C: string | null;

}
