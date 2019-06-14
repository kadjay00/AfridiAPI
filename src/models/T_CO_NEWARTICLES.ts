import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CO_NEWARTICLES', {schema: 'dbo' } )
export class T_CO_NEWARTICLES {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'CON_IDNUMBER_C',
        })
    public CON_IDNUMBER_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'CON_ORIGINE_C',
        })
    public CON_ORIGINE_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'CON_EXCEPTION_STATUS_C',
        })
    public CON_EXCEPTION_STATUS_C: string;

    @Column('varchar', {
        nullable: false,
        length: 16,
        name: 'CON_USERID_C',
        })
    public CON_USERID_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'CON_DATE_DAT',
        })
    public CON_DATE_DAT: Date;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'CON_PDT_C',
        })
    public CON_PDT_C: string | null;

}
