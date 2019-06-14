import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FOLDERANALYSE_TYPE', {schema: 'dbo' } )
export class T_FOLDERANALYSE_TYPE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'FTP_FOLDERTYPE_C',
        })
    public FTP_FOLDERTYPE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'FTP_DESCRIPNED_C',
        })
    public FTP_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'FTP_DESCRIPFRA_C',
        })
    public FTP_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'FTP_QUALIFICATION_C',
        })
    public FTP_QUALIFICATION_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 3,
        scale: 0,
        name: 'FTP_HIERARCHY_N',
        })
    public FTP_HIERARCHY_N: number | null;

}
