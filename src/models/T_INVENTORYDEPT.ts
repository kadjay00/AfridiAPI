import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INVENTORYDEPT', {schema: 'dbo' } )
export class T_INVENTORYDEPT {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'IND_SECTORID_C',
        })
    public IND_SECTORID_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IND_DEPARTMENT_N',
        })
    public IND_DEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'IND_SALESFAMILY_C',
        })
    public IND_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'IND_SALESSUBFAMILY_C',
        })
    public IND_SALESSUBFAMILY_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'IND_STARTDATE_DAT',
        })
    public IND_STARTDATE_DAT: Date;

    @Column('datetime', {
        nullable: true,
        name: 'IND_ENDDATE_DAT',
        })
    public IND_ENDDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'IND_MODIFIEDDATE_DAT',
        })
    public IND_MODIFIEDDATE_DAT: Date | null;

}
