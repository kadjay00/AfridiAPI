import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_MSI_PLANNING', {schema: 'dbo' } )
export class T_MSI_PLANNING {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:10,
        // scale:0,
        name: 'MPL_PLANNINGID_N',
        })
    public MPL_PLANNINGID_N: number;

    @Column('int', {
        nullable: false,
        name: 'MPL_HEADER_N',
        })
    public MPL_HEADER_N: number;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'MPL_APPCODE_C',
        })
    public MPL_APPCODE_C: string;

    @Column('datetime', {
        nullable: true,
        name: 'MPL_ORDERDT_DAT',
        })
    public MPL_ORDERDT_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'MPL_FINAL_ORDERDT_DAT',
        })
    public MPL_FINAL_ORDERDT_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'MPL_DELIVERDT_DAT',
        })
    public MPL_DELIVERDT_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'MPL_SUPPR_C',
        })
    public MPL_SUPPR_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'MPL_SUPPR_DAT',
        })
    public MPL_SUPPR_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'MPL_SESSION_N',
        })
    public MPL_SESSION_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'MPL_MANDHEADER_C',
        })
    public MPL_MANDHEADER_C: string | null;

}
