import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RECALAGE', {schema: 'dbo' } )
export class T_RECALAGE {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'REC_RECALAGE_N',
        })
    public REC_RECALAGE_N: number;

    @Column('int', {
        nullable: false,
        name: 'REC_DEPARTMENT_N',
        })
    public REC_DEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        length: 4,
        name: 'REC_SALESGROUP_C',
        })
    public REC_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        length: 4,
        name: 'REC_SALESFAMILY_C',
        })
    public REC_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        length: 2,
        name: 'REC_STATUS_C',
        })
    public REC_STATUS_C: string;

    @Column('varchar', {
        nullable: true,
        name: 'REC_COMMENT_C',
        })
    public REC_COMMENT_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'REC_CREATION_DAT',
        })
    public REC_CREATION_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'REC_MODIFICATION_DAT',
        })
    public REC_MODIFICATION_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'REC_USERCREATE_C',
        })
    public REC_USERCREATE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'REC_USERMODIF_C',
        })
    public REC_USERMODIF_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'REC_VALIDATION_DAT',
        })
    public REC_VALIDATION_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'REC_CANCELATION_DAT',
        })
    public REC_CANCELATION_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'REC_GROUP_C',
        })
    public REC_GROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'REC_ACTIVITY_N',
        })
    public REC_ACTIVITY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'REC_SUBDEPARTMENT_N',
        })
    public REC_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'REC_SALESSUBFAMILY_C',
        })
    public REC_SALESSUBFAMILY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'REC_TYPE_C',
        })
    public REC_TYPE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'REC_INVENTORYID_N',
        })
    public REC_INVENTORYID_N: number | null;

}
